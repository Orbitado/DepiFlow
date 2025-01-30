import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import { AtSign, LogIn } from 'lucide-react';

function LoginPage() {
    return (
        <Card className="mx-auto py-12 w-[350px] container">
            <CardContent>
                <form>
                    <div className="items-center gap-4 grid w-full">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email" className="hover:cursor-pointer">
                                <span>Email</span>
                            </Label>
                            <Input type="email" id="email" placeholder={'Enter your Email'} />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password" className="hover:cursor-pointer">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="peer-disabled:opacity-70 text-sm leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                to="/forgot-password"
                                className={`text-blue-500 text-sm ${buttonVariants({ variant: 'link' })}`}
                            >
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                    <Button className="items-center mt-6 w-full">
                        <span>Sign In</span>
                        <LogIn />
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col py-0">
                <div className="flex items-center space-x-6 mt-2 mb-6 w-full">
                    <span className="bg-gray-700 w-full h-0.5"></span>
                    <p className="text-center">Or</p>
                    <span className="bg-gray-700 w-full h-0.5"></span>
                </div>
                <Button
                    className="justify-center items-center gap-2 w-full"
                    variant="outline"
                    onClick={() => console.log('Google Sign In')}
                >
                    <AtSign className="text-lg" />
                    <span>Sign in with Google</span>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default LoginPage;
