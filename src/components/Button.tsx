import { HeartIcon } from "@radix-ui/react-icons";
import { Code, Quote, Text } from "@radix-ui/themes";
import { BaseButton } from "@radix-ui/themes/dist/cjs/components/base-button";

type Props = {
    title: string
    action: () => void
};
export const Button = ({ title, action }: Props) => {
    return (
        <BaseButton style={{padding:'10px'}} color="bronze" onClick={action} variant="solid" radius="large" size="4">
            <HeartIcon color="red" width='30px' height='25px' />
            <Text  size='4' style={{color:'black',fontWeight:'bold'}}>{title}</Text>
        </BaseButton>

    );
};

