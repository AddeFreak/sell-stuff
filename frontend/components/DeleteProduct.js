import { useMutation } from "@apollo/client"
import  gql  from "graphql-tag"

const DELETE_PRODUCT_MUTATION = gql`
mutation DELETE_PRODUCT_MUTATION($id: ID!) {
  deleteProduct(id:$id) {
    id
    name
  }
}
`
function updateCache(cache, payload) {
  console.log(payload)
  console.log('paylaod')
  const deleteCache = cache.identify(payload.data.deleteProduct)
  cache.evict(deleteCache)
}
export default function DeleteProduct({ id, children}) {
  const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id: id },
    update: updateCache
  })
  return <button type="button"
    onClick={() => {
      if (confirm('Are you sure you want to delete this item?'))
        deleteProduct()
    }}>{children}</button>
}