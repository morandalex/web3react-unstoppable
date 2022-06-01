import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import React from 'react'
import { walletconnect, walletlink } from '../lib/connectors'
import {uauth} from '../lib/connectors'
function ConnectWallet(): JSX.Element {
  const { activate, activateBrowserWallet } = useEthers()

  const { onOpen, isOpen, onClose } = useDisclosure()
  async function handleUAuthConnect() {
   console.log('ciao')
    await activate(uauth)
  }
  return (
    <>
      <Box
        order={[-1, null, null, 2]}
        textAlign={['left', null, null, 'right']}
      >
        <Button colorScheme="teal" variant="outline" onClick={onOpen}>
          Connect to a wallet
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect to a wallet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src="/images/logo-metamask.png"
                  alt="MetaMask"
                />
              }
              onClick={() => {console.log('metamask');
                activateBrowserWallet()
              }}
            >
              MetaMask
            </Button>
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src="/images/logo-walletconnect.svg"
                  alt="WalletConnect"
                />
              }
              onClick={() => {
                activate(walletconnect)
              }}
            >
              WalletConnect
            </Button>
        {
        
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src="https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0"
                  alt="Uauth"
                />
              }
              onClick={() => {console.log('uauth');
              handleUAuthConnect()
            }}
            >
              Uauth
            </Button>
            
            }
            <Button
              justifyContent="space-between"
              width="100%"
              mb="4"
              size="lg"
              variant="outline"
              rightIcon={
                <Image
                  maxWidth="20px"
                  src="/images/logo-coinbase.jpg"
                  alt="Coinbase Wallet"
                />
              }
              onClick={() => {
                activate(walletlink)
              }}
            >
              Coinbase Wallet
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConnectWallet