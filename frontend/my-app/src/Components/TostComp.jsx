import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react"

function ToastComp({message}) {
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
  
    return (
      <Wrap>
        {statuses.map((status) => (
          <WrapItem >
            <Button
              onClick={() =>
                toast({
                  title: `${message} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    )
  }

  export default ToastComp