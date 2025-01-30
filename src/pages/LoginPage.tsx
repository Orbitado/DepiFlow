import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AtSign, LogIn } from 'lucide-react';
import { Form } from '@/components/ui/form';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '@/zod/zodConfig';
import FormInput from '@/components/common/FormInput';
import SignInWith from '@/components/common/SignInWith';

function LoginPage() {
    const form = useForm({
        resolver: zodResolver(userSchema),
    });

    const emailError = form.formState.errors.email as FieldError;
    const passwordError = form.formState.errors.password as FieldError;

    const handleSubmit = form.handleSubmit((values) => {
        console.log(values);
    });

    return (
        <Card className="mx-auto w-[350px] container">
            <CardHeader>
                <CardTitle className="text-center">Welcome to DepiFlow</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            form={form}
                            errors={emailError}
                            placeholder={'Enter your email'}
                            type="email"
                        >
                            Email
                        </FormInput>
                        <FormInput
                            form={form}
                            errors={passwordError}
                            placeholder={'Enter your password'}
                            type="password"
                        >
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
                <SignInWith icon={<AtSign />}>Sign In with Google</SignInWith>
            </CardFooter>
        </Card>
    );
}

export default LoginPage;
