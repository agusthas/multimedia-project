import React from 'react';
import { Avatar, Badge, Table, Group, Text, ScrollArea, useMantineTheme } from '@mantine/core';

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; nim: string }[];
}

const jobColors = {
  cameraman: 'blue',
  'script writer': 'cyan',
  editor: 'pink',
};

export function UsersTable({ data }: UsersTableProps) {
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={jobColors[item.job.toLowerCase()]}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.job}
        </Badge>
      </td>
      <td>
        <Text size="sm">{item.nim}</Text>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Members</th>
            <th>Job title</th>
            <th>NIM</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
