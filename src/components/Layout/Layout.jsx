import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container/Container';
import { Navigaion } from 'components/Navigaion/Navigation';

export default function Layout() {
  return (
    <div>
      <Navigaion />
      <Container>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
