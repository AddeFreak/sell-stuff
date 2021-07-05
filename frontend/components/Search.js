import { useLazyQuery } from '@apollo/client'
import { resetIdCounter, useCombobox } from 'downshift'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/dist/client/router'
import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
    position: absolute;
    width: 100%;
    z-index: 2;
    border: 1px solid grey;
`

const DropDownItem = styled.div`
    border-bottom: 1px solid grey;
    background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
    padding: 1rem;
    transition: all 0.2s;
    ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
    display: flex;
    align-items: center;
    border-left: 10px solid
        ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
    img {
        margin-right: 10px;
    }
`
const SEARCH_PRODUCTS_QUERY = gql`
    query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
        searchTerms: allProducts(
            where: {
                OR: [
                    { name_contains_i: $searchTerm }
                    { description_contains_i: $searchTerm }
                ]
            }
        ) {
            id
            name
            picture {
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`
const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

const SearchStyles = styled.div`
    /*  position: relative; */
    input {
        width: 100%;
        padding: 10px;
        border: 0;
        font-size: 2rem;
        &.loading {
            animation: ${glow} 0.5s ease-in-out infinite alternate;
        }
    }
`
export default function Search() {
  const router = useRouter();
    const [findItems, { loading, data, error }] = useLazyQuery(
        SEARCH_PRODUCTS_QUERY,
        {
            fetchPolicy: 'no-cache',
        }
    )
    const items = data?.searchTerms || []
    const findItemsWithInterval = debounce(findItems, 350)
    resetIdCounter()
  const {
      isOpen,
        inputValue,
        getMenuProps,
        getInputProps,
        getComboboxProps,
      getItemProps,
        highlightedIndex
    } = useCombobox({
        items: items,
        onInputValueChange() {
            findItemsWithInterval({
                variables: {
                    searchTerm: inputValue,
                },
            })
        },
      onSelectedItemChange({ selectedItem }) {
        router.push({
          pathname: `/product/${selectedItem.id}`
        })
      },
      itemToString: item => item === null ? '' : item.name
    })
    return (
        <SearchStyles>
            <div {...getComboboxProps()}>
                <input
                    {...getInputProps({
                        type: 'search',
                        placeholder: 'Search for an Item',
                        id: 'search',
                        className: loading ? 'loading' : '',
                    })}
                />
            </div>
            <DropDown {...getMenuProps()}>
                {isOpen && items.map((item, index) => (
                    <DropDownItem
                        key={item.id}
                    {...getItemProps({ item: item })}
                    highlighted={index === highlightedIndex}
                    >
                        <img
                            src={item.picture.image.publicUrlTransformed}
                            alt={item.name}
                            width='50'
                        />
                        {item.name}
                    </DropDownItem>
                ))}
          {isOpen && !items.length && !loading && (
            <DropDownItem>Sorry, no items found for {inputValue}</DropDownItem>
          )}
            </DropDown>
        </SearchStyles>
    )
}
