'use client';

import { FormUser } from '@/components/FormUser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as S from './styles';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // push('/home');
  }, []);

  return (
    <main>
      <S.WrapperSectionForm>
        <FormUser createAccount push={router.push} />
      </S.WrapperSectionForm>
    </main>
  );
}
