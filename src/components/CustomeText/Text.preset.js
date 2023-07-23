import { colors } from "../../theme/colors";
import { typography } from "../../theme/typhography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.darkGray,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: colors.darkGray,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.darkGray,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
};
