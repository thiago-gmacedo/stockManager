import tw, {styled} from 'twin.macro';

export const LoginContainer = styled.div`
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

export const LoginInput = styled.input`
  ${tw`
    border-2
    border-gray-300
    border-solid
    p-2
    m-2
  `}
`;

export const LoginButton = styled.button`
  ${tw`
    border-2
    border-gray-300
    border-solid
    p-2
    m-2
  `}
`;
