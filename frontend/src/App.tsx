import { Button, Container, Group, Title } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import { getContacts } from './network';

function App() {
  const query = useQuery(['contacts'], getContacts)
  const { data: contacts } = query;

  if (query.isLoading) {
    return (
      <Group position="center">
        <Title>Is Loading...</Title>
      </Group>
    )
  }

  return (
    <>
      <Container mt="xl">
        <Title align="center">{(contacts || [])[0]?.name || 'Unknow'}</Title>
      </Container>
      <Group mt="xl" position="center">
        <Button onClick={() => query.refetch()}>
          Reload
        </Button>
      </Group>
    </>
  );
}

export default App;
