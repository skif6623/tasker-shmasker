import React, { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { ideasSelector } from '../../redux/selectors';
import { fetchIdeas } from '../../redux/operations';

import { Card } from '../../components/Card/Card';
import { CardList } from './MainPage.styled';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const ideas = useAppSelector(ideasSelector);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [dispatch]);

  return (
    <>
      <CardList>
        {ideas.map(({ activity, id, type }) => {
          return (
            <li key={id}>{<Card id={id} type={type} title={activity} />}</li>
          );
        })}
      </CardList>
    </>
  );
};
