import * as React from "react"

declare module "react" {
  interface HTMLAttributes<T> {
    // extends React's HTMLAttributes
    coordinates?: any
    label?: string
    name?: string
    componenttype?: number
    hidden?: boolean
    id?: string
  }
}
