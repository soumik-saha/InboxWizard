import { Disclosure } from '@headlessui/react';

export default function LoginFooter() {
    return (
        <Disclosure as="footer" className="bg-black" style={{ background: "#121212", borderTop: "1px solid #25262B" }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-8 items-center justify-center">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="flex flex-shrink-0 items-center justify-center text-gray-600 text-sm">
                            © 2023 ReachInbox. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}