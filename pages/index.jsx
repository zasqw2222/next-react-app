import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h1`
  color: red;
  font-size: 25px;
`

const Index = () => (
    <div>
        <Link href="/about" as="/google">
            google
        </Link>
    </div>
)

export default Index