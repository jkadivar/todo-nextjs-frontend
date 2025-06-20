

import { LogInForm } from '@/components/userLoginForm';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from '@/components/ui/card';



export default function LoginPage() {

  

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className='text-center'>Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <LogInForm />

                </CardContent>
            </Card>
        </div>
    );
}
