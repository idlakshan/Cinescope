"use server";

import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

export type AuthResponseState = {
  success: boolean;
  message: string | null; 
  errors?: Record<string, string[]>;
};

export async function signup(
  prevState: unknown,
  formData: FormData,
): Promise<AuthResponseState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (!name || name.trim() === "") {
    return {
      success: false,
      message: null,
      errors: { name: ["Name is required!"] },
    };
  }

  if (!email || email.trim() === "") {
    return {
      success: false,
      message: null,
      errors: { email: ["Email is required!"] },
    };
  }

  if (!password) {
    return {
      success: false,
      message: null,
      errors: { password: ["Password is required!"] },
    };
  }

  if (password.length < 8) {
    return {
      success: false,
      message: null,
      errors: { password: ["Password must be at least 8 characters long."] },
    };
  }

  if (password !== confirmPassword) {
    return {
      success: false,
      message: null,
      errors: { confirmPassword: ["Passwords do not match."] },
    };
  }

  try {
    const response = await auth.api.signUpEmail({
      body: { name, email, password },
    });

    console.log("Better-Auth API response:", response);

    return {
      success: true,
      message: "User registered successfully!",
    };
  } catch (error) {
    console.error("Better-Auth Signup Error:", error);

    if (error instanceof APIError) {
      return {
        success: false,
        message: error.message,
        errors: {},
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: {},
    };
  }
}

export async function login(
  prevState: unknown,
  formData: FormData,
): Promise<AuthResponseState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      success: false,
      message: null,
      errors: { email: ["Please fill in all fields."] },
    };
  }

  try {
    const response = await auth.api.signInEmail({
      body: { email, password },
    });

    console.log("Better-Auth Login response:", response);

    return {
      success: true,
      message: "Logged in successfully!",
      errors: {},
    };
  } catch (error) {
  if (error instanceof APIError) {
    return {
      success: false,
      message: error.message,
      errors: {}
    };
  }
  return {
    success: false,
    message: "Something went wrong.",
    errors: {}
  };
}
}
