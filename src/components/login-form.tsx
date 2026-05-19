"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, type AuthResponseState } from "@/actions/auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const initialState: AuthResponseState = {
    success: false,
    message: null,
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(login, initialState);

  useEffect(() => {
    if (!state) return;

    if (state.success && state.message) {
      toast.success(state.message);
      router.push("/dashboard");
      router.refresh();
    }

    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <FieldGroup className="gap-4">
              <Field className="gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  className={cn(
                    state?.errors?.email?.[0] && "border-destructive!",
                  )}
                  required
                />
                {state?.errors?.email?.[0] && (
                  <FieldError className="text-xs text-destructive mt-1">
                    {state.errors.email[0]}
                  </FieldError>
                )}
              </Field>

              <Field className="gap-1">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-muted-foreground hover:text-primary"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className={cn(
                    state?.errors?.password?.[0] && "border-destructive!",
                  )}
                  required
                />
                {state?.errors?.password?.[0] && (
                  <FieldError className="text-xs text-destructive mt-1">
                    {state.errors.password[0]}
                  </FieldError>
                )}
              </Field>

              <FieldGroup className="pt-2">
                <Field className="gap-2">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full cursor-pointer"
                  >
                    {isPending ? "Logging in..." : "Login"}
                  </Button>

                  <Button
                    variant="outline"
                    type="button"
                    className="w-full"
                    disabled
                  >
                    Login with Google
                  </Button>

                  <FieldDescription className="text-center mt-2">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/signup"
                      className="underline hover:text-primary"
                    >
                      Sign up
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
