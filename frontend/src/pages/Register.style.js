import tw, {styled} from 'twin.macro';

export const RegisterContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    h-screen
    w-screen
    bg-gray-100
  `}
`;

export const RegisterInput = styled.input`
  ${tw`
    border-2
    border-gray-300
    border-solid
    p-2
    m-2
  `}
`;

export const RegisterButton = styled.button`
  ${tw`
    border-2
    border-gray-300
    border-solid
    p-2
    m-2
  `}
`;
