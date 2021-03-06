import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  const handleClick = jest.fn();

  context('delete task', () => {
    const { container, getByText } = render((
      <Item
        task={task}
        onClickDelete={handleClick}
      />
    ));

    it('renders delete a task', () => {
      expect(container).toHaveTextContent('Done');

      expect(handleClick).not.toBeCalled();

      fireEvent.click(getByText('Done'));

      expect(handleClick).toBeCalledWith(1);
    });
  });
});
