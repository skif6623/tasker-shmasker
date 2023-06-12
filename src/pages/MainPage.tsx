import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ideasSelector } from '../redux/selectors';
import { fetchIdeas } from '../redux/operations';
import { Card } from '../components/Card/Card';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const ideas = useAppSelector(ideasSelector);

  useEffect(() => {
    dispatch(fetchIdeas());
  }, [dispatch]);

  return (
    <>
      <ul>
        {ideas.map(({ activity, id, type }) => {
          return (
            <li key={id}>{<Card id={id} type={type} title={activity} />}</li>
          );
        })}
      </ul>
    </>
  );
};
