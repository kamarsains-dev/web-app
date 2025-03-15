'use client'

import { Button } from "@/components/ui/button";
import { 
    ClerkLoaded, 
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,

} from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-14 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-xl mx-auto flex items-center justify-between h-full">
                <div className=" flex items-center gap-x-3">
                    <Link href='/'>
                        <Image
                        src="/logo.svg"
                        height={35}
                        width={35}
                        alt="Logo"
                        className="lg:hidden"
                        />
                    </Link>
                    
                    <h1 className="text-2xl font-bold text-gray-900 tracking-wide hidden lg:block">
                        <Link href='/'>
                            Kamar Sains
                        </Link>
                    </h1>
                </div>
                <ClerkLoading>
                    <LoaderCircle className="h-5 w-5 text-muted-foreground animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode="modal"
                        >
                            <Button size="lg" variant="outline" className="text-base font-bold w-24 h-10">
                                Log In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};