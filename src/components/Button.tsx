import { HeartIcon } from "@radix-ui/react-icons";
import { Code, Quote, Text } from "@radix-ui/themes";
import { BaseButton } from "@radix-ui/themes/dist/cjs/components/base-button";

type Props = {
    title:string
    action:() => void
};
export const Button = ({title,action}: Props) => {
    return (
        <BaseButton onClick={action} variant="solid" radius="large" size="4">
        <HeartIcon/> 
        <Code size='6'>{title}</Code>
        </BaseButton>
        
    );
};

