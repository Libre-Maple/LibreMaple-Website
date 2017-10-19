{-# LANGUAGE BangPatterns      #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE UnboxedTuples     #-}

{-# OPTIONS_GHC -funbox-strict-fields #-}
{-# OPTIONS_GHC -O2                   #-}

module Main where

import           Control.Applicative ((<|>))

import           Snap.Core           (dir, ifTop, Snap)
import           Snap.Http.Server    (httpServe, setPort)
import           Snap.Util.FileServe (serveDirectory, serveFile)


site :: Snap ()
site = ifTop (serveFile "public/index.html") <|> serveDirectory "public"

main :: IO ()
main = httpServe (setPort 3000 mempty) site
