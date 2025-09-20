import { UseFormReturn, RegisterOptions } from 'react-hook-form';
import type { LoginSignupFormFields } from './internal/common/LoginSignupForm';
export declare enum State {
    Login = "login",
    Signup = "signup",
    ForgotPassword = "forgot-password",
    ResetPassword = "reset-password",
    VerifyEmail = "verify-email"
}
export type CustomizationOptions = {
    logo?: string;
    socialLayout?: 'horizontal' | 'vertical';
    appearance?: {
        colors?: {
            waspYellow?: string;
            gray700?: string;
            gray600?: string;
            gray500?: string;
            gray400?: string;
            red?: string;
            darkRed?: string;
            green?: string;
            brand?: string;
            brandAccent?: string;
            errorBackground?: string;
            errorText?: string;
            successBackground?: string;
            successText?: string;
            submitButtonText?: string;
            formErrorText?: string;
        };
        fontSizes?: {
            sm?: string;
        };
    };
};
export type ErrorMessage = {
    title: string;
    description?: string;
};
export type FormState = {
    isLoading: boolean;
};
export type AdditionalSignupFieldRenderFn = (hookForm: UseFormReturn<LoginSignupFormFields>, formState: FormState) => React.ReactNode;
export type AdditionalSignupField = {
    name: string;
    label: string;
    type: 'input' | 'textarea';
    validations?: RegisterOptions<LoginSignupFormFields>;
};
export type AdditionalSignupFields = (AdditionalSignupField | AdditionalSignupFieldRenderFn)[] | AdditionalSignupFieldRenderFn;
//# sourceMappingURL=types.d.ts.map