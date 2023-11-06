import React from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import { generatePaginationList } from '../../utils/pagination';
import { PaginationButton, PaginationContainer, PaginationStep } from './Pagination.styles';

type PaginationProps = {
    totalPages: number
}
const Pagination = ({ totalPages }: PaginationProps) => {
  const [ filters, setFilters ] = useSearchParams();
  const actualPage = +(filters.get('page') || 1);

  const paginationSteps = generatePaginationList(actualPage, totalPages);
  const handleNavigateStep = (goto: number) => {
    filters.set('page', (goto).toString());
    setFilters(filters);
  };

  return (
    <PaginationContainer>
      <PaginationButton disabled={actualPage===1} onClick={() => handleNavigateStep(actualPage-1)}>
        <IoArrowBack  />
      </PaginationButton>
      
      {
        paginationSteps.map((step, idx: number) => (
          <NumericStep key={+step+idx} value={step} handleClick={handleNavigateStep} pageCount={totalPages}/>
        ))
      }
      
      <PaginationButton disabled={actualPage===totalPages} onClick={() => handleNavigateStep(actualPage + 1)}>
        <IoArrowForward />
      </PaginationButton>
    </PaginationContainer>
  );
};

type StepProps = {
    value: number | string
    pageCount: number
    handleClick: (args1: number) => void
}

const NumericStep = ({ value, handleClick }: StepProps) => {
  const [ filters ] = useSearchParams();
  const actualPage = filters.get('page') || 1;
  return (
    <PaginationStep active={actualPage == value} onClick={typeof value === 'number' ? () => handleClick(value) : () => {}}>{value}</PaginationStep>
  );
};

export default Pagination;