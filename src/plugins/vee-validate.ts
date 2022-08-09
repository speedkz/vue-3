import { defineRule } from "vee-validate";
import { digits, email } from "@vee-validate/rules";
import i18n from "@/plugins/i18n";

const { t } = i18n.global;

// eslint-disable-next-line no-unused-vars
defineRule("required", (value: string, [target], ctx) => {
  if (!value || !value.length) {
    return `${t(`FIELD.${ctx.field}`)} is required`;
  }
  return true;
});

defineRule("email", (value: string) => {
  if (email(value)) return "Invalid email format";
  return true;
});

defineRule("invalidOtp", (value: string) => {
  if (!digits(value, [6])) return "Invalid OTP Code";
  return true;
});
