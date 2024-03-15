import Link from 'next/link';

import { Section } from '../layout/Section';
import { Background } from '@/components/background/Background';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';

const Header = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<></>}>
        <li>
          <Link href="/">GitHub</Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { Header };
