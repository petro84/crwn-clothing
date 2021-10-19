import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
      </Suspense>
    </div>
  );
};

export default ShopPage;
