import { FormControl, FormLabel, FormField, FormItem, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormInputProps } from '@/types';

function FormInput({ children, form: { control }, errors, placeholder, type }: FormInputProps) {
    return (
        <FormField
            name={type}
            control={control}
            render={({ field }) => (
                <FormItem className="my-2">
                    <FormLabel htmlFor={type} className="hover:cursor-pointer">
                        {children}
                    </FormLabel>
                    <FormControl>
                        <Input type={type} id={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    {errors && (
                        <FormDescription className="text-red-500">{errors.message}</FormDescription>
                    )}
                </FormItem>
            )}
        ></FormField>
    );
}

export default FormInput;
