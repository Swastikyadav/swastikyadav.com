import { Button } from "@/components/ui/button";

export function MentalModelSubscriptionForm({ success }) {
  return (
    <div className="my-8">
      <form
        action="https://app.convertkit.com/forms/7041351/subscriptions"
        method="post"
      >
        <input
          type="email"
          name="email_address"
          id="email_address"
          placeholder="3 new Mental Models every Tuesday."
          className="w-full p-2 mb-2 border rounded border-slate-400"
          required
        />
        <Button type="submit" className="w-full bg-[#597cff]">
          {`Yes! I'm In :)`}
        </Button>
        {success && (
          <small className="font-semibold text-green-600">
            Success! Now check your email to confirm the subscription. Also
            check your spam folder if can't find the email.
          </small>
        )}
      </form>
    </div>
  );
}
