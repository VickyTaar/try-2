
interface FormData {
  type: 'newsletter' | 'waitlist' | 'contact' | 'partner';
  email: string;
  [key: string]: any;
}

export const submitForm = async (data: FormData) => {
  const ZAPIER_WEBHOOK_URL = "YOUR_ZAPIER_WEBHOOK_URL"; // You'll need to replace this with your actual Zapier webhook URL

  try {
    const response = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        ...data,
        recipientEmail: "victorndiritu9@gmail.com", // This ensures all form submissions go to your email
        timestamp: new Date().toISOString(),
        source: window.location.origin,
      }),
    });

    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
