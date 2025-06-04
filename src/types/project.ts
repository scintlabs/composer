export type UserRole = "Owner" | "Admin" | "Developer" | "Tester" | "Viewer"

export type ProjectStatus = "Planning" | "Active" | "On Hold" | "Completed" | "Archived"

export type PriorityLevel = "Urgent" | "High" | "Medium" | "Low" | "None"

export type TaskStatus =
    | "Backlog"
    | "Todo"
    | "In Progress"
    | "In Review"
    | "Done"
    | "Blocked"

export type TaskType =
    | "Feature"
    | "Bug"
    | "Documentation"
    | "Test"
    | "Refactor"
    | "Enhancement"
    | "Research"

export type CustomFieldValue = string | number | boolean | Date | string[] | null

export interface TeamMember {
    id: string
    name: string
    email: string
    avatar?: string
    role: UserRole
    departmentId?: string
    skills?: string[]
    joinedAt: Date
}

export interface CommentData {
    id: string
    taskId: string
    authorId: string
    content: string
    createdAt: Date
    updatedAt?: Date
    attachments?: AttachmentData[]
    mentions?: string[]
    parentCommentId?: string
}

export interface AttachmentData {
    id: string
    name: string
    url: string
    type: string
    size: number
    uploadedAt: Date
    uploadedBy: string
}

export interface LabelData {
    id: string
    name: string
    color: string
    description?: string
    projectId: string
}

export interface MilestoneData {
    id: string
    title: string
    description?: string
    startDate?: Date
    dueDate?: Date
    progress: number
    status: "Not Started" | "In Progress" | "Completed"
    taskIds: string[]
}

export interface SprintData {
    id: string
    name: string
    goal?: string
    startDate: Date
    endDate: Date
    status: "Planning" | "Active" | "Completed" | "Canceled"
    taskIds: string[]
    retrospective?: {
        summary: string
        wentWell: string[]
        needsImprovement: string[]
        actionItems: string[]
    }
}

export interface TaskDependency {
    id: string
    sourceTaskId: string
    targetTaskId: string
    type: "Blocks" | "Blocked By" | "Related To" | "Duplicates" | "Duplicated By"
}

export interface TimeEntry {
    id: string
    taskId: string
    userId: string
    startTime: Date
    endTime?: Date
    duration?: number
    description?: string
    billable: boolean
}

export interface TaskData {
    id: string
    projectId: string
    title: string
    description: string
    type: TaskType
    status: TaskStatus
    priority: PriorityLevel
    assigneeId?: string
    reporterId: string
    createdAt: Date
    updatedAt?: Date
    dueDate?: Date
    estimatedHours?: number
    actualHours?: number
    storyPoints?: number
    sprintId?: string
    milestoneId?: string
    parentTaskId?: string
    subtaskIds: string[]
    labels: string[]
    attachments: AttachmentData[]
    comments: CommentData[]
    dependencies: TaskDependency[]
    timeEntries: TimeEntry[]
    customFields?: Record<string, CustomFieldValue>
}

export interface EpicData {
    id: string
    projectId: string
    title: string
    description: string
    status: "Not Started" | "In Progress" | "Completed"
    createdAt: Date
    startDate?: Date
    endDate?: Date
    taskIds: string[]
    color?: string
    progress: number
}

export type CustomFieldType =
    | "Text"
    | "Number"
    | "Date"
    | "Select"
    | "MultiSelect"
    | "Checkbox"

export interface CustomFieldDefinition {
    id: string
    name: string
    type: CustomFieldType
    options?: string[]
    defaultValue?: CustomFieldValue
    required: boolean
    projectId: string
}

export interface ProjectMetrics {
    totalTasks: number
    completedTasks: number
    openIssues: number
    burndownChart?: {
        dates: string[]
        remainingEffort: number[]
    }
    velocity?: {
        sprints: string[]
        points: number[]
    }
    timeTracking: {
        estimatedTotal: number
        actualTotal: number
        remainingTotal: number
    }
}

export type IntegrationType =
    | "GitHub"
    | "GitLab"
    | "Jira"
    | "Slack"
    | "Microsoft Teams"
    | "CI/CD"

export type IntegrationStatus = "Active" | "Inactive" | "Error"

export type IntegrationConfig =
    | GitHubConfig
    | GitLabConfig
    | JiraConfig
    | SlackConfig
    | TeamsConfig
    | CICDConfig

export interface GitHubConfig {
    repositoryUrl: string
    apiToken: string
    owner: string
    repo: string
    defaultBranch?: string
    syncIssues: boolean
    syncPullRequests: boolean
}

export interface GitLabConfig {
    repositoryUrl: string
    apiToken: string
    projectId: string
    defaultBranch?: string
    syncIssues: boolean
    syncMergeRequests: boolean
}

export interface JiraConfig {
    baseUrl: string
    projectKey: string
    username: string
    apiToken: string
    syncIssues: boolean
}

export interface SlackConfig {
    webhookUrl: string
    channel: string
    botToken?: string
    notifyOnTaskCreation: boolean
    notifyOnTaskCompletion: boolean
    notifyOnComments: boolean
}

export interface TeamsConfig {
    webhookUrl: string
    notifyOnTaskCreation: boolean
    notifyOnTaskCompletion: boolean
    notifyOnComments: boolean
}

export interface CICDConfig {
    provider: "Jenkins" | "GitHub Actions" | "GitLab CI" | "CircleCI" | "Travis CI"
    webhookUrl?: string
    apiToken?: string
    jobName?: string
    notifyOnBuildStatus: boolean
}

export interface ExternalIntegration {
    id: string
    type: IntegrationType
    config: IntegrationConfig
    lastSyncedAt?: Date
    status: IntegrationStatus
    errorMessage?: string
}

export interface RepositoryInfo {
    name: string
    url: string
    description?: string
    branch?: string
}

export interface DocumentationLink {
    title: string
    url: string
    category?: string
}

export type WorkingDay =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"

export interface ProjectSettings {
    taskNumberSequence: number
    defaultTaskType: TaskType
    defaultAssigneeId?: string
    isPublic: boolean
    enableTimeTracking: boolean
    enableIssueLinks: boolean
    workingDays: WorkingDay[]
    workingHoursPerDay: number
}

export interface ProjectData {
    id: string
    name: string
    key: string
    description: string
    status: ProjectStatus
    createdAt: Date
    updatedAt: Date
    startDate?: Date
    targetEndDate?: Date
    actualEndDate?: Date
    ownerId: string
    team: TeamMember[]
    tasks: TaskData[]
    epics: EpicData[]
    sprints: SprintData[]
    milestones: MilestoneData[]
    labels: LabelData[]
    customFields: CustomFieldDefinition[]
    repositories?: RepositoryInfo[]
    metrics: ProjectMetrics
    integrations: ExternalIntegration[]
    settings: ProjectSettings
    documentationLinks?: DocumentationLink[]
}
