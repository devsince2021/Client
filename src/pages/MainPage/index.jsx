import React from 'react';
import MainHeader from '../../components/MainHeader';
import BranchList from '../../components/BranchList';

export default function AppMain({
  onLogout,
  isPrivateMode,
  handleOnClick,
  currentUser,
  handleInput,
  branchList,
  onScroll
}) {
  return (
    <>
      <MainHeader
        isPrivateMode={isPrivateMode}
        handleOnClick={handleOnClick}
        onLogout={onLogout}
        handleInput={handleInput}
        currentUser={currentUser}
      />
      <BranchList
        isPrivateMode={isPrivateMode}
        currentUser={currentUser}
        branchList={branchList}
        onScroll={onScroll}
      />
    </>
  );
}
