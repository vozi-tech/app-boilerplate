import { useState } from "react";
import axios from "axios";

export function useOtpVerification() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const verifyOtp = async (otp: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace this with your actual API call
      const response = await axios.post("/api/verify-otp", { otp });

      if (response.data.success) {
        // OTP verification successful
        return true;
      } else {
        setError("Invalid OTP. Please try again.");
        return false;
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { verifyOtp, isLoading, error };
}
