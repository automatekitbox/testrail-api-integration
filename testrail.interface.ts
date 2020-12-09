declare type CustomFieldType = boolean | string | number | number[] | any[] | undefined;
export interface TestRailOptions {
    domain: string;
    username: string;
    password: string;
}
export interface INewTestResult {
    status_id: number;
    comment?: string;
    version?: string;
    elapsed?: string;
    defects?: string;
    assignedto_id?: number;
    [key: string]: CustomFieldType;
}
export interface INewTestResults {
    case_id: number;
    status_id: number;
    comment?: string;
    version?: string;
    elapsed?: string;
    defects?: string;
    assignedto_id?: number;
    [key: string]: CustomFieldType;
}
export interface ICase {
    created_by?: number;
    created_on?: number;
    estimate?: any;
    estimate_forecast?: any;
    id?: number;
    milestone_id?: number;
    priority_id?: number;
    refs?: string;
    section_id?: number;
    suite_id?: number;
    template_id?: number;
    title?: string;
    type_id?: number;
    updated_by?: number;
    updated_on?: number;
    [key: string]: CustomFieldType;
}
export interface ICaseFilters {
    suite_id?: number;
    section_id?: number;
    created_after?: number;
    created_before?: number;
    created_by?: string;
    milestone_id?: number;
    priority_id?: number;
    template_id?: number;
    type_id?: number;
    updated_after?: number;
    updated_before?: number;
    updated_by?: number;
}
export interface ICaseUpdate {
    title?: string;
    template_id?: number;
    type_id?: number;
    priority_id?: number;
    estimate?: string;
    milestone_id?: number;
    refs?: string;
    [key: string]: CustomFieldType;
}
export interface ITestRun {
    assignedto_id: number;
    blocked_count: number;
    completed_on: number;
    config: string;
    config_ids: number[];
    created_by: number;
    created_on: number;
    custom_status1_count: number;
    custom_status2_count: number;
    custom_status3_count: number;
    custom_status4_count: number;
    custom_status5_count: number;
    custom_status6_count: number;
    custom_status7_count: number;
    description: string;
    failed_count: number;
    id: number;
    include_all: boolean;
    is_completed: number;
    milestone_id: number;
    plan_id: number;
    name: string;
    passed_count: number;
    project_id: number;
    retest_count: number;
    suite_id: number;
    untested_count: number;
    url: string;
}
export interface INewTestRun {
    suite_id?: number;
    name: string;
    description: string;
    milestone_id?: number;
    assignedto_id?: number;
    include_all?: boolean;
    case_ids?: number[];
}
export interface ITestResult {
    assignedto_id: number;
    comment: string;
    created_by: number;
    created_on: number;
    defects: string;
    elapsed: string;
    id: number;
    status_id: number;
    test_id: number;
    version: string;
    [key: string]: CustomFieldType;
}
export interface ITest {
    id: number;
    case_id: number;
    assignedto_id?: number;
    estimate?: string;
    estimate_forecast?: string;
    milestone_id?: number;
    priority_id?: number;
    refs?: string;
    run_id?: number;
    status_id?: number;
    title?: string;
    type_id?: number;
    [key: string]: CustomFieldType;
}
export interface ICaseField {
    description: string;
    display_order?: number;
    id: number;
    include_all?: boolean;
    is_active?: boolean;
    label?: string;
    name: string;
    system_name: string;
    template_ids?: number[];
    type_id: number;
    configs?: ICaseFieldConfig[];
}
export interface ICaseType {
    id: number;
    is_default: boolean;
    name: string;
}
export interface ICaseFieldConfig {
    id: string;
    context: {
        is_global?: boolean;
        project_ids: number[];
    };
    options: {
        items?: string;
        default_value?: string;
        format?: string;
        is_required?: boolean;
        has_actual?: boolean;
        has_expected?: boolean;
        rows?: string;
    };
}
export interface ISection {
    depth: number;
    description: string;
    display_order: number;
    id: number;
    name: string;
    parent_id: number;
    suite_id: number;
}
export interface ISectionUpdate {
    description?: string;
    name?: string;
}
export interface INewSection {
    description?: string;
    suite_id: number;
    parent_id: number;
    name: string;
}
export interface ITestrailUser {
    id: number;
    email: string;
    name: string;
    is_active: boolean;
}
export interface ITemplate {
    id: number;
    is_default: boolean;
    name: string;
}
export interface INewSuite {
    name?: string;
    description?: string;
}
export interface ISuite {
    completed_on?: number;
    description: string;
    id: number;
    is_baseline?: boolean;
    is_completed?: boolean;
    is_master?: boolean;
    name: string;
    project_id: number;
    url: string;
}
export interface ITestStatus {
    color_bright: string;
    color_dark: string;
    color_medium: string;
    id: number;
    is_final: boolean;
    is_system: boolean;
    is_untested: boolean;
    label: string;
    name: string;
}
export interface ITestRun {
    assignedto_id: number;
    blocked_count: number;
    completed_on: number;
    config: string;
    config_ids: number[];
    created_by: number;
    created_on: number;
    custom_status1_count: number;
    custom_status2_count: number;
    custom_status3_count: number;
    custom_status4_count: number;
    custom_status5_count: number;
    custom_status6_count: number;
    custom_status7_count: number;
    description: string;
    failed_count: number;
    id: number;
    include_all: boolean;
    is_completed: number;
    milestone_id: number;
    plan_id: number;
    name: string;
    passed_count: number;
    project_id: number;
    retest_count: number;
    suite_id: number;
    untested_count: number;
    url: string;
}
export interface ITestResultFilters {
    limit: number;
    offset: number;
    status_id: number | number[];
}
export interface ITestResultsForRunFilters extends ITestResultFilters {
    created_after: number;
    created_before: number;
    created_by: number | number[];
}
export interface IProject {
    announcment: string;
    completed_on: number;
    id: number;
    is_completed: number;
    name: string;
    show_announcement: boolean;
    suite_mode: SuiteMode;
    url: string;
}
export interface IProjectUpdate {
    name?: string;
    announcement?: string;
    show_announcement?: boolean;
    suite_mode?: SuiteMode;
    is_completed?: boolean;
}
declare enum SuiteMode {
    SINGLE = 1,
    SINGLE_WITH_BASELINES = 2,
    MULTIPLE_SUITES = 3
}
export interface IProjectFilters {
    is_completed: number;
}
export interface IPriority {
    id: number;
    is_default: boolean;
    priority: number;
    short_name: string;
    name: string;
}
export interface IMilestone {
    completed_on: number;
    description: string;
    due_on: number;
    id: number;
    is_completed: number;
    is_started: number;
    milestones?: IMilestone[];
    name: string;
    parent_id: number;
    project_id: number;
    start_on: number;
    started_on: number;
    url: string;
}
export interface INewMilestone {
    name?: string;
    description?: string;
    due_on?: number;
    parent_id?: number;
    start_on?: number;
}
export interface IMilestoneUpdate extends INewMilestone {
    is_completed?: number;
    is_started?: number;
}
export interface IMilestoneFilters {
    is_completed: number;
    is_started: number;
}
export interface IConfigurationGroup {
    id: number;
    project_id: number;
    name: string;
    configs: IConfiguration[];
}
export interface IConfiguration {
    id: number;
    group_id: number;
    name: string;
}
export interface IConfigurationUpdate {
    name: string;
}
export {};
