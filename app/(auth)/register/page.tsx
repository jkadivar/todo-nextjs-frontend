

import { RegisterForm } from '@/components/newUserForm';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card';



export default function RegisterPage() {


    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className='text-center'>Register</CardTitle>
                </CardHeader>
                <CardContent>
                    <RegisterForm />

                </CardContent>
            </Card>
        </div>
    );
}
