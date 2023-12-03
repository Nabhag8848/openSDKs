'use client'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yL79BMw9qDt
 */
import Link from 'next/link'
import {ChangeEvent, useState} from 'react'
import {initSDK} from '@opensdks/core'
import {githubSdkDef} from '@opensdks/sdk-github'
import {openaiSdkDef} from '@opensdks/sdk-openai'
import CommitsList from '@/components/CommitsList'
// shadcn imports
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'

const apiKey = process.env['OPENAI_API_KEY']

export const github = initSDK(githubSdkDef, {
  headers: {
    Authorization: `Bearer ${process.env['GITHUB_TOKEN']}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

export const openai = initSDK(openaiSdkDef, {
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${apiKey}`,
  // },
})

export default function Component() {
  const [prLink, setPrLink] = useState('')
  const [commits, setCommits] = useState([])
  const [summary, setSummary] = useState('')

  const handlePRLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrLink(event.target.value)
  }

  const fetchCommits = async () => {
    const prUrl = new URL(prLink)
    const pathParts = prUrl.pathname.split('/') // Splitting the pathname to extract owner, repo, and PR number
    const owner = pathParts[1]
    const repo = pathParts[2]
    const prNumber = pathParts[4]
    // "/repos/{owner}/{repo}/pulls/{pull_number}/comments"
    try {
      const response = await github.GET(
        '/repos/{owner}/{repo}/pulls/{pull_number}/commits',
        {
          params: {
            path: {owner, repo, pull_number: Number(prNumber)},
          },
        },
      )
      setCommits(response.data as never)
    } catch (err) {
      console.error('Error fetching commits:', err)
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">GitHub PR Summary</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Enter a GitHub PR link to view a summary of the commits.
        </p>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pr-link">Pull Request Link</Label>
            <Input
              id="pr-link"
              placeholder="https://github.com/user/repo/pull/123"
              value={prLink}
              onChange={handlePRLinkChange}
              required
            />
          </div>
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            type="submit"
            onClick={fetchCommits}>
            Analyze
          </Button>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Summarized Commits</CardTitle>
            <CardDescription>
              A brief summary of all commits generated by OpenAI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              OpenAI generated commit summary goes here...
            </p>
          </CardContent>
        </Card>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Commits Summary</CardTitle>
            <CardDescription>
              List of commits for the provided GitHub PR
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CommitsList commits={commits} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
