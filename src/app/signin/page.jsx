'use client';
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Icon } from "@iconify/react";


const SignInPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        const { data, error } = await authClient.signIn.email({
            
            email,
            password,
            callbackURL: '/',
        })

        console.log(data,error,"logged in")
    }

    const handleSocialSignUp = async (provider) => {
    await authClient.signIn.social({ provider })
}


    return (
        <Card className="mx-auto w-full sm:w-96 md:w-125 lg:w-125 py-8 sm:py-10 mt-10 sm:mt-15 px-4">
            <h1 className="text-center text-2xl font-bold">Sign Up</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>


                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button
                        type="submit"
                        className="bg-pink-500 hover:bg-pink-900 text-white"
                    >
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary" className="text-pink-500 bg-pink-100">
                        Reset
                    </Button>
                </div>
                <div className="flex items-center gap-2 my-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <Button className="w-full" variant="tertiary" onClick={()=>handleSocialSignUp('google')}>
                    <Icon icon="devicon:google" />
                    Sign up with Google
                </Button>
                <Button className="w-full" variant="tertiary" onClick={()=>handleSocialSignUp('github')}>
                    <Icon icon="devicon:github" />
                    Sign up with Github
                </Button>
            </Form>


        </Card>
    );
};

export default SignInPage;