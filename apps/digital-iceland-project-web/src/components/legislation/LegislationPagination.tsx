import { Box, Pagination, Text } from '@island.is/island-ui/core'
import { LegislationPaginationProps } from '../../types/legislation'

export const LegislationPagination = ({
  currentPage,
  totalPages,
  onPageChange,
  startIndex,
  endIndex,
  totalItems,
}: LegislationPaginationProps) => {
  return (
    <>
      <Box display="flex" justifyContent="flexEnd" marginTop={3}>
        <Pagination
          totalPages={totalPages}
          page={currentPage}
          renderLink={(pageNum, className, children) => (
            <button
              className={className}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => onPageChange(pageNum)}
              type="button"
            >
              {children}
            </button>
          )}
        />
      </Box>
      <Text variant="small" color="dark400" marginTop={2}>
        Showing {startIndex + 1}-{endIndex} out of {totalItems}
      </Text>
    </>
  )
} 