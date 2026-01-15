import { component$, useSignal, $, useComputed$ } from "@builder.io/qwik";

function cx(...parts: Array<string | false | undefined | null>) {
    return parts.filter(Boolean).join(" ");
}

const isEmailValid = (v: string) => /\S+@\S+\.\S+/.test(v.trim());

export const ContactForm = component$(() => {
    const name = useSignal("");
    const email = useSignal("");
    const projectType = useSignal("Web");
    const budget = useSignal("Not sure");
    const message = useSignal("");

    const tried = useSignal(false);

    const isOk = useComputed$(() =>
        name.value.trim().length >= 2 &&
        isEmailValid(email.value) &&
        message.value.trim().length >= 10
    );

    const openMail = $(() => {
        tried.value = true;
        if (!isOk.value) return;

        const subject = encodeURIComponent(`Project inquiry: ${projectType.value}`);
        const body = encodeURIComponent(
            `Name: ${name.value}\nEmail: ${email.value}\nProject: ${projectType.value}\nBudget: ${budget.value}\n\nMessage:\n${message.value}\n`
        );

        // TODO: o'zingizning emailni qo'ying
        window.location.href = `mailto:hello@yourdomain.com?subject=${subject}&body=${body}`;
    });

    return (
        <div class="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <div class="flex items-start justify-between gap-4">
                <div>
                    <div class="text-sm font-semibold text-black">Project brief</div>
                    <div class="mt-1 text-sm text-black/60">
                        The more details, the better the estimate.
                    </div>
                </div>
                <span class="rounded-2xl border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/60">
                    2 min
                </span>
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                    <label class="text-xs font-medium text-black/60">Your name</label>
                    <input
                        class={cx(
                            "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-black/70 shadow-sm outline-none transition",
                            tried.value && name.value.trim().length < 2
                                ? "border-red-400/60"
                                : "border-black/10 focus:border-black/30"
                        )}
                        placeholder="Caine"
                        value={name.value}
                        onInput$={(e) => (name.value = (e.target as HTMLInputElement).value)}
                    />
                </div>

                <div>
                    <label class="text-xs font-medium text-black/60">Email</label>
                    <input
                        class={cx(
                            "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-black/70 shadow-sm outline-none transition",
                            tried.value && !isEmailValid(email.value)
                                ? "border-red-400/60"
                                : "border-black/10 focus:border-black/30"
                        )}
                        placeholder="you@email.com"
                        value={email.value}
                        onInput$={(e) => (email.value = (e.target as HTMLInputElement).value)}
                    />
                </div>

                <div>
                    <label class="text-xs font-medium text-black/60">Project type</label>
                    <select
                        class="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70 shadow-sm outline-none focus:border-black/30 transition"
                        value={projectType.value}
                        onChange$={(e) => (projectType.value = (e.target as HTMLSelectElement).value)}
                    >
                        <option>Web</option>
                        <option>Mobile</option>
                        <option>AR / XR</option>
                        <option>Desktop</option>
                        <option>Backend</option>
                    </select>
                </div>

                <div>
                    <label class="text-xs font-medium text-black/60">Budget</label>
                    <select
                        class="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70 shadow-sm outline-none focus:border-black/30 transition"
                        value={budget.value}
                        onChange$={(e) => (budget.value = (e.target as HTMLSelectElement).value)}
                    >
                        <option>Not sure</option>
                        <option>$500 – $1k</option>
                        <option>$1k – $3k</option>
                        <option>$3k – $10k</option>
                        <option>$10k+</option>
                    </select>
                </div>
            </div>

            <div class="mt-4">
                <label class="text-xs font-medium text-black/60">Message</label>
                <textarea
                    class={cx(
                        "mt-2 min-h-[140px] w-full rounded-2xl border bg-white px-4 py-3 text-sm text-black/70 shadow-sm outline-none transition",
                        tried.value && message.value.trim().length < 10
                            ? "border-red-400/60"
                            : "border-black/10 focus:border-black/30"
                    )}
                    placeholder="Tell us what you want to build, deadlines, links, references..."
                    value={message.value}
                    onInput$={(e) => (message.value = (e.target as HTMLTextAreaElement).value)}
                />
                <div class="mt-2 text-xs text-black/50">
                    Tip: add deadline + references (links), it speeds up estimation.
                </div>
            </div>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div class="text-xs text-black/50">
                    By sending, you agree we can contact you back.
                </div>

                <button
                    type="button"
                    class={cx(
                        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium shadow-sm transition",
                        isOk.value
                            ? "bg-black text-white hover:opacity-90"
                            : "cursor-not-allowed bg-black/20 text-white"
                    )}
                    onClick$={openMail}
                >
                    Send brief
                </button>
            </div>
        </div>
    );
});
