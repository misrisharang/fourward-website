import { useEffect, useState } from "react";
import axios from "axios";
import { Logo } from "../components/Logo";

const API = `${import.meta.env.VITE_BACKEND_URL}/api`;

const inputCls =
  "w-full border border-hairline bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-accent";

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem("fw_admin_token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [briefs, setBriefs] = useState(null);

  const load = async (t) => {
    try {
      const { data } = await axios.get(`${API}/briefs`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      setBriefs(data);
    } catch {
      setToken("");
      localStorage.removeItem("fw_admin_token");
      setBriefs(null);
    }
  };

  useEffect(() => {
    if (token) load(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem("fw_admin_token", data.access_token);
      setToken(data.access_token);
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("fw_admin_token");
    setToken("");
    setBriefs(null);
  };

  return (
    <main data-testid="admin-page" className="min-h-screen bg-ink px-5 py-16 text-paper sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-6 w-6" />
            <span className="font-grotesk text-base font-bold tracking-[0.22em]">FOURWARD / BRIEFS</span>
          </div>
          {token && (
            <button
              data-testid="admin-logout"
              onClick={logout}
              className="font-grotesk text-[11px] uppercase tracking-[0.25em] text-paper/60 hover:text-accent"
            >
              Log out
            </button>
          )}
        </div>

        {!token ? (
          <form data-testid="admin-login-form" onSubmit={login} className="mx-auto mt-24 max-w-md border border-hairline p-8">
            <h1 className="font-grotesk text-3xl font-bold tracking-tight">Admin sign in</h1>
            <p className="mt-2 text-sm text-fog">Read the briefs that come through the site.</p>
            <div className="mt-8 space-y-5">
              <input
                data-testid="admin-input-email"
                type="email"
                required
                placeholder="Admin email"
                className={inputCls}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                data-testid="admin-input-password"
                type="password"
                required
                placeholder="Password"
                className={inputCls}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <p data-testid="admin-login-error" className="mt-4 text-sm text-red-400">
                {error}
              </p>
            )}
            <button
              data-testid="admin-login-submit"
              type="submit"
              className="mt-8 w-full bg-accent px-6 py-3.5 font-grotesk text-xs font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Sign in
            </button>
          </form>
        ) : (
          <div className="mt-12">
            <p className="font-grotesk text-[11px] uppercase tracking-[0.3em] text-paper/40">
              {briefs ? `${briefs.length} brief${briefs.length === 1 ? "" : "s"} received` : "Loading…"}
            </p>
            <div className="mt-6 space-y-px">
              {briefs &&
                briefs.map((b) => (
                  <div key={b.id} data-testid={`brief-${b.id}`} className="grid gap-3 border border-hairline p-6 md:grid-cols-12">
                    <div className="md:col-span-4">
                      <p className="font-grotesk text-lg font-bold">{b.name}</p>
                      <p className="text-sm text-fog">
                        {b.company}
                        {b.role ? ` · ${b.role}` : ""}
                      </p>
                      <a href={`mailto:${b.work_email}`} className="text-sm text-accent">
                        {b.work_email}
                      </a>
                      {b.website && <p className="mt-1 text-xs text-paper/40">{b.website}</p>}
                    </div>
                    <div className="md:col-span-5">
                      <p className="font-grotesk text-[10px] uppercase tracking-[0.25em] text-paper/40">Objective</p>
                      <p className="mt-1 text-sm text-paper/85">{b.objective}</p>
                      {b.target_metric && (
                        <p className="mt-2 text-sm text-fog">
                          <span className="text-paper/50">Metric:</span> {b.target_metric}
                        </p>
                      )}
                      {b.message && <p className="mt-2 text-sm text-fog">{b.message}</p>}
                    </div>
                    <div className="text-sm text-fog md:col-span-3 md:text-right">
                      {b.timeline && <p>{b.timeline}</p>}
                      <p className="mt-1 text-xs text-paper/35">
                        {new Date(b.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                      </p>
                    </div>
                  </div>
                ))}
              {briefs && briefs.length === 0 && (
                <p data-testid="briefs-empty" className="border border-hairline p-10 text-center text-fog">
                  No briefs yet. They land here the moment someone sends one.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
