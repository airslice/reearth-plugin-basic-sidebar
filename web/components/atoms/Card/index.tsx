import { Box } from "@chakra-ui/react";

type CardProps = {
  p?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ p, children }: CardProps) => {
  return (
    <Box
      bg="white"
      borderRadius="4px"
      boxShadow="0px 2px 8px rgba(0, 0, 0, 0.15)"
      p={p ?? "12px"}
      display="flex"
      flexDirection="column"
      gap="8px"
      flexGrow="1"
    >
      {children}
    </Box>
  );
};

export default Card;
