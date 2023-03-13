import AdminLayout from "@/components/layout/AdminLayout"
import { NextPage } from "next"

interface Props {}

const index: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div>this is admin</div>
    </AdminLayout>
  )
}

export default index
