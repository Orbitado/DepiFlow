import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, LogIn } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/zod/zodConfig';
import FormInput from '@/components/common/FormInput';
import SignInWith from '@/components/common/SignInWith';
import { authService } from '@/services/authService';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { FormInputType } from '@/types';

function LoginPage() {
    const { onEmailPasswordSignIn, onGoogleSignIn } = useAuth();
    const routerNavigate = useNavigate();

    const form = useForm<FormInputType>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const emailError = form.formState.errors.email as FieldError;
    const passwordError = form.formState.errors.password as FieldError;

    const onSubmit = form.handleSubmit(async ({ email, password } : FormInputType) => {
        const result = await authService.loginUser(email, password, onEmailPasswordSignIn);

        if (result.success) {
            routerNavigate('/');
        }
    });

    return (
        <Card className="mx-auto w-[350px] container">
            <CardHeader>
                <CardTitle className="text-center">Welcome to DepiFlow</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={onSubmit}>
                        <FormInput
                            form={form}
                            errors={emailError}
                            placeholder={'Enter your email'}
                            type="email">
                            Email
                        </FormInput>
                        <FormInput
                            form={form}
                            errors={passwordError}
                            placeholder={'Enter your password'}
                            type="password">
                            Password
                        </FormInput>
                        <Button className="mt-6 w-full" type="submit">
                            <span>Sign In</span>
                            <LogIn className="text-white" />
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col">
                <div className="flex items-center space-x-6 mb-6 w-full">
                    <span className="bg-gray-700 w-full h-0.5"></span>
                    <p className="text-center">Or</p>
                    <span className="bg-gray-700 w-full h-0.5"></span>
                </div>
                <SignInWith icon={<AtSign />} onClick={onGoogleSignIn}>
                    Sign In with Google
                </SignInWith>
            </CardFooter>
        </Card>
    );
}

export default LoginPage;
