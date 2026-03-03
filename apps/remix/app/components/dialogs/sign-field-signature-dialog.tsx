import { useState } from 'react';

import { Trans } from '@lingui/react/macro';
import { createCallable } from 'react-call';

import { Button } from '@documenso/ui/primitives/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@documenso/ui/primitives/dialog';
import { SignaturePad } from '@documenso/ui/primitives/signature-pad';

import { DocumentSigningDisclosure } from '../general/document-signing/document-signing-disclosure';

export type SignFieldSignatureDialogProps = {
  initialSignature?: string;
  fullName?: string;
  typedSignatureEnabled?: boolean;
  uploadSignatureEnabled?: boolean;
  drawSignatureEnabled?: boolean;
};

export const SignFieldSignatureDialog = createCallable<
  SignFieldSignatureDialogProps,
  string | null
>(
  ({
    call,
    fullName,
    typedSignatureEnabled,
    uploadSignatureEnabled,
    drawSignatureEnabled,
    initialSignature,
  }) => {
    const [localSignature, setLocalSignature] = useState(initialSignature);

    return (
      <Dialog open={true} onOpenChange={(value) => (!value ? call.end(null) : null)}>
        <DialogContent
          position="center"
          className="m-0 flex h-[100dvh] w-screen max-w-none flex-col overflow-y-auto rounded-none border-none bg-background p-4 sm:max-w-none sm:p-8 [&>button]:hidden"
        >
          {/* Container centralizador para o conteúdo não ficar esticado ao infinito num monitor largo */}
          <div className="mx-auto flex min-h-full w-full max-w-5xl flex-1 flex-col justify-between">
            {/* Parte de Cima: Cabeçalho e Área de Desenho */}
            <div className="flex flex-1 flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl">
                  <Trans>Sign Signature Field</Trans>
                </DialogTitle>
              </DialogHeader>

              {/* A caixa de desenho ocupa o espaço restante, com uma altura mínima garantida */}
              <div className="mt-6 flex min-h-[400px] flex-1 flex-col">
                <SignaturePad
                  fullName={fullName}
                  value={localSignature ?? ''}
                  onChange={({ value }) => setLocalSignature(value)}
                  typedSignatureEnabled={typedSignatureEnabled}
                  uploadSignatureEnabled={uploadSignatureEnabled}
                  drawSignatureEnabled={drawSignatureEnabled}
                />
              </div>
            </div>

            {/* Parte de Baixo: Termos e Botão Gigante de Assinar */}
            <div className="mt-8 shrink-0">
              <DocumentSigningDisclosure />

              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  className="w-full px-12 py-8 text-xl sm:w-auto"
                  disabled={!localSignature}
                  onClick={() => call.end(localSignature || null)}
                >
                  <Trans>Sign</Trans>
                </Button>
              </DialogFooter>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);
