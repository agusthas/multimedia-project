import { Container, createStyles, Title, Text, AspectRatio, Space } from '@mantine/core';
import { UsersTable } from '../components/CastTable';

const useStyles = createStyles((theme) => ({
  hero: {
    minHeight: '100vh',
  },
  synopsis: {
    minHeight: '100vh',
  },
  title: {
    color: theme.black,
    fontSize: 55,
    fontWeight: 900,
    letterSpacing: -2,
  },
}));

export default function HomePage() {
  const { classes } = useStyles();
  return (
    <>
      <section className={classes.hero}>
        <Container size="lg">
          <Title className={classes.title} align="center" mt="lg">
            A Doctor&apos;s View:{' '}
            <Text inherit variant="gradient" component="span">
              Life After Covid
            </Text>
          </Title>

          <AspectRatio ratio={16 / 9} sx={{ maxWidth: 1000 }} mx="auto" mt="lg">
            <iframe
              src="https://www.youtube.com/embed/5q6ljPemIYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Container>
      </section>

      <section className={classes.synopsis}>
        <Container size="lg">
          <Title align="center" pt="xl">
            Synopsis
          </Title>
          <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
            A Doctor&apos;s View is a documentary about the life of a doctor after the COVID-19
            pandemic. The film introduce a collection of interviews with doctor professionals who
            have been affected by the pandemic and their experiences.
          </Text>

          <Title align="center" pt="xl">
            Cast Members
          </Title>
          <Space mt="xl" />
          <UsersTable
            data={[
              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/77998c8f-7dfc-4f41-a5f9-38f1027b3ade.jpg',
                name: 'Made Agustha Intaran Sukma',
                job: 'Cameraman',
                nim: '2440048970',
              },
              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/2b5018bf-5a45-4ab0-98ed-d9210bf2dc58.jpg',
                name: 'Clevian Permana Budi',
                job: 'Script Writer',
                nim: '2440086123',
              },
              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/a2a05d1b-3120-4edc-a069-3f53da55dc1c.jpg',
                name: 'Pangestu',
                nim: '2440016464',
                job: 'Script Writer',
              },
              {
                avatar: 'https://randomuser.me/api/portraits/',
                name: 'Ryu Aprijanto',
                job: 'Script Writer',
                nim: '2440045211',
              },

              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/7b342a16-0f34-416e-969e-b2cdbb69b62a.jpg',
                name: 'Vincent Gonardy',
                job: 'Script Writer',
                nim: '2440107935',
              },
              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/8d9ffdad-93c4-4978-ba7d-7dabcc11d558.jpg',
                name: 'Faisal Ario Hasan',
                job: 'Script Writer',
                nim: '2440045823',
              },
              {
                avatar:
                  'https://stbm7resourcesprod.blob.core.windows.net/profilepicture/fac1afe9-3ea0-4763-b4f4-2ddf4e76eddf.jpg',
                name: 'Velencia',
                job: 'Editor',
                nim: '2440059671',
              },
            ]}
          />
        </Container>
      </section>
    </>
  );
}
