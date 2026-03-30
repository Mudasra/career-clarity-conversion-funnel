export const submitLeadToCRM = async (leadData) => {
  await new Promise((res) => setTimeout(res, 800));

  if (Math.random() > 0.05) {
    console.log("[CRM] Lead submitted:", leadData);
    return { success: true, leadId: `LEAD-${Date.now()}` };
  }
  throw new Error("CRM submission failed");
};

export const submitBookingToCRM = async (bookingData) => {
  await new Promise((res) => setTimeout(res, 600));
  console.log("[CRM] Booking submitted:", bookingData);
  return { success: true, bookingId: `BOOK-${Date.now()}` };
};

export const trackEvent = (event, properties = {}) => {
  console.log(`[Analytics] ${event}`, properties);
};
