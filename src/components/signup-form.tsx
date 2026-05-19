"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signup, type AuthResponseState } from "@/actions/auth";
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

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();

  const initialState: AuthResponseState = {
    success: false,
    message: null,
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(signup, initialState);

  useEffect(() => {
    if (!state) return;

    if (state.success && state.message) {
      toast.success(state.message);
      router.push("/login");
    }

    if (!state.success && state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <FieldGroup className="gap-4">
            <Field className="gap-1">
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className={cn(
                  state?.errors?.name?.[0] && "border-destructive!",
                )}
                required
              />
              {state?.errors?.name?.[0] && (
                <FieldError className="text-xs text-destructive mt-1">
                  {state.errors.name[0]}
                </FieldError>
              )}
            </Field>

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
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                className={cn(
                  state?.errors?.password?.[0] && "border-destructive!",
                )}
                required
              />
              {state?.errors?.password?.[0] ? (
                <FieldError className="text-xs text-destructive mt-1">
                  {state.errors.password[0]}
                </FieldError>
              ) : (
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              )}
            </Field>

            <Field className="gap-1">
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                className={cn(
                  state?.errors?.confirmPassword?.[0] && "border-destructive!",
                )}
                required
              />
              {state?.errors?.confirmPassword?.[0] && (
                <FieldError className="text-xs text-destructive mt-1">
                  {state.errors.confirmPassword[0]}
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
                  {isPending ? "Creating Account..." : "Create Account"}
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full"
                  disabled
                >
                  Sign up with Google
                </Button>

                <FieldDescription className="text-center mt-2">
                  Already have an account?{" "}
                  <Link href="/login" className="underline hover:text-primary">
                    Sign in
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
