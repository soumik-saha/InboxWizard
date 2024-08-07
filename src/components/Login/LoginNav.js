import { Disclosure } from '@headlessui/react';

export default function LoginNav() {
    return (
        <Disclosure as="nav" className="bg-black" style={{ borderBottom: "1px solid #25262B" }}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-12 items-center justify-center">
                    <div className="flex flex-1 items-center justify-center">
                        <div className="flex flex-shrink-0 items-center justify-center">
                            <img
                                alt="REACHBOX logo"
                                src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fl4AzEtXSK~06lRD-V3DXYPZGX-3ok8CEebBaMpSkWQAkFWOVwabcZspMmEKNJES3i8SqT9w1c-Qt96D1-3ezTqfrM~RwaNthPHlPppqJ4fCG0oXLlENaaOubkJhpqGEVqAwJK54pmhpO0YTC5QDVSexqsQ9r2XMeBnhoLJDvYGo4GiLG-IDAY3q4Xstp5YuRtiWYG2EpThoF3R1SiQYLzYuHq0ges5bFcTw64nKinSqt0hB8A7~LcnqIvJImb0Nya-B12d1M13IxP3i0zLHkkWXM0XrvjmSVFkuS9mX82bDOqUG7A9lH~R3GH-A38NCtoyLR17HHwFxf~d9kB59hw__"
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    );
}