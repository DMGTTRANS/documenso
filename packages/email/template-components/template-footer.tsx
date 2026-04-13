import { Trans } from '@lingui/react/macro';

import { Link, Section, Text } from '../components';
import { useBranding } from '../providers/branding';

export type TemplateFooterProps = {
  isDocument?: boolean;
};

export const TemplateFooter = ({ isDocument = true }: TemplateFooterProps) => {
  const branding = useBranding();

  return (
    <Section>
      {isDocument && !branding.brandingHidePoweredBy && (
        <Text className="my-4 text-base text-slate-400">
          <Trans>
          </Trans>
        </Text>
      )}

      {branding.brandingEnabled && branding.brandingCompanyDetails && (
        <Text className="my-8 text-sm text-slate-400">
          {branding.brandingCompanyDetails.split('\n').map((line, idx) => {
            return (
              <>
                {idx > 0 && <br />}
                {line}
              </>
            );
          })}
        </Text>
      )}

      {!branding.brandingEnabled && (
        <Text className="my-8 text-sm text-slate-400">
          Essa mensagem do DEPARTAMENTO MUNICIPAL DE TRÂNSITO E TRANSPORTES DE GRAVATÁ, é enviada exclusivamente ao destinatário informado e pode conter dados pessoais, protegidos pela Lei Geral de Proteção de Dados (Lei 13.709/2018), assim como informações confidenciais, protegidas por sigilo profissional. O DMGTTRANS ressalta seu comprometimento em assegurar a segurança e a proteção das informações contidas neste e-mail e informa que a sua utilização desautorizada é ilegal e sujeita o infrator às penas da lei. Se você o recebeu indevidamente, queira, por gentileza, reenviá-lo ao emitente, esclarecendo o equívoco.
        </Text>
      )}
    </Section>
  );
};

export default TemplateFooter;
